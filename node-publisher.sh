set -e
set +x
echo GO UP GO UP GUPY
echo "A new package will be published o/"
echo "Release type: ${RELEASE_TYPE}"
echo "Changes: ${RELEASE_CHANGES}"
ssh-add -l
export AWS_DEFAULT_REGION=us-east-1
aws codeartifact login \
  --tool npm \
  --repository GupyPackageManager \
  --domain gpm \
  --domain-owner 139818044667
echo "Installing dependencies (npm ci)"
make release VERSION_KEYWORD="${RELEASE_TYPE}" RELEASE_CHANGES="${RELEASE_CHANGES}"
