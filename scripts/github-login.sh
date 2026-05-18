#!/usr/bin/env bash
# GitHub push용 브라우저 로그인 (GitHub 계정이 Google과 연동돼 있으면 로그인 화면에서 "Google로 계속" 선택)
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export PATH="${HOME}/.local/bin:${PATH}"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI(gh) 설치 중..."
  mkdir -p "${HOME}/.local/bin"
  TMP="$(mktemp -d)"
  curl -fsSL "https://github.com/cli/cli/releases/download/v2.63.2/gh_2.63.2_linux_amd64.tar.gz" -o "${TMP}/gh.tgz"
  tar -xzf "${TMP}/gh.tgz" -C "${TMP}"
  cp "${TMP}/gh_2.63.2_linux_amd64/bin/gh" "${HOME}/.local/bin/gh"
  rm -rf "${TMP}"
fi

echo "브라우저가 열리면 GitHub 로그인을 진행하세요."
echo "  - GitHub 가입을 Google로 했다면: 「Continue with Google」 선택"
echo "  - 그 외: GitHub 아이디/비밀번호 또는 2단계 인증"
echo ""

gh auth login --hostname github.com --git-protocol https --web

echo ""
echo "Git이 gh 인증을 쓰도록 설정합니다..."
gh auth setup-git

cd "${REPO_ROOT}"

# 잘못된 upstream 이름(orgin) 보정
if git config --get branch.main.remote 2>/dev/null | grep -qx 'orgin'; then
  git branch --set-upstream-to=origin/main main 2>/dev/null || true
fi

if gh auth status >/dev/null 2>&1; then
  echo ""
  echo "로그인 완료. 이제 push 할 수 있습니다:"
  echo "  cd ${REPO_ROOT} && git push origin main"
else
  echo "로그인에 실패했습니다. 위 단계를 다시 실행해 주세요." >&2
  exit 1
fi
