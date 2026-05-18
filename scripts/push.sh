#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export PATH="${HOME}/.local/bin:${PATH}"
cd "${REPO_ROOT}"

if ! gh auth status >/dev/null 2>&1; then
  echo "GitHub 로그인이 필요합니다. scripts/github-login.sh 를 먼저 실행하세요."
  exit 1
fi

BRANCH="$(git branch --show-current)"
REMOTE="origin"

git push -u "${REMOTE}" "${BRANCH}"
echo "Push 완료: ${REMOTE}/${BRANCH}"
