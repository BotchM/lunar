export SENTRY_AUTH_TOKEN=93b00c26cd6c44f4b2cef5f7ed7f69dfd02066278c654f9ba7fbeb27a53e4463
export SENTRY_ORG=cosmos-1i
VERSION=$(sentry-cli releases propose-version)

# Create a release
sentry-cli releases new -p lunar $VERSION

# Associate commits with the release
sentry-cli releases set-commits --auto $VERSION

sentry-cli releases deploys $VERSION new -e ENVIRONMENT
