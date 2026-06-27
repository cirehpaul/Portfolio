git add -A
git commit -m "Update model to gemini-2.5-flash"
git push origin main

git checkout gh-pages
git checkout main -- react-portfolio/dist
Copy-Item -Path "react-portfolio/dist/*" -Destination "." -Recurse -Force
Remove-Item -Path "react-portfolio" -Recurse -Force
git add -A
git commit -m "Deploy new model update to gh-pages"
git push origin gh-pages

git checkout main
