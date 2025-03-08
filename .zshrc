# Git add, commit, and push function
gcp() {
  if [ -z "$1" ]; then
    echo "Please provide a commit message"
    echo "Usage: gcp \"your commit message\""
    return 1
  fi

  # Check if we're in a git repository
  if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "Error: Not a git repository"
    return 1
  fi

  # Add all changes
  echo "📦 Adding all changes..."
  git add .

  # Commit with message
  echo "💬 Committing with message: $1"
  git commit -m "$1"

  # Get current branch name
  current_branch=$(git symbolic-ref --short HEAD)

  # Push to remote
  echo "🚀 Pushing to remote branch: $current_branch"
  git push origin "$current_branch"

  echo "✅ Done!"
}

# Alias for quick access
alias gc='gcp' 