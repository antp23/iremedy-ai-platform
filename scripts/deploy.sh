#!/usr/bin/env bash
set -euo pipefail

# Deploy the thetradespy.ai content site.
#
# This script is run on the DigitalOcean droplet by GitHub Actions
# after a push to the main branch.
#
# The repo is cloned at /opt/iremedy-ai-platform and site files
# are served from /var/www/thetradespy.ai.
#
# Usage:
#   bash /opt/iremedy-ai-platform/scripts/deploy.sh

REPO_DIR="/opt/iremedy-ai-platform"
SITE_DIR="/var/www/thetradespy.ai"

echo "==> Deploying thetradespy.ai content site"

echo "==> Git pull (branch: main)"
cd "$REPO_DIR"
git fetch origin
git checkout main
git pull origin main

echo "==> Syncing files to $SITE_DIR"
rsync -av --delete \
  --exclude='.git' \
  --exclude='.github' \
  --exclude='scripts' \
  --exclude='README.md' \
  "$REPO_DIR/" "$SITE_DIR/"

echo "==> Deployment of thetradespy.ai completed successfully"
