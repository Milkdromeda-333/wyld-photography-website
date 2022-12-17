working on making the nav close whe nit s clicked away from
and making hte images of sec1 background low opacity 


Solved problems:
- To put a background image inline use bg-[url(*path*)]. Make sure that the syntax is COMPLETE by typing out the pairs of charecters as you go. ALSO a relative path image needs to be typed out as if its from inside the dist file because thats how the css file will be served. 
- To use your own font you'll need to go inside the tailwind confic and the end property. Make a fontFamily property and name it and add the names of the fonts you imported. To refer to it in the file use `font-` and then the name you gave to it.

- Tailwind stopped working so I uninstalled and reinstalled and ran "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch" again. Accidentally ran `-full` when I re-installed.

Standing questions and problems:

Q: Is it normal to have to refresh my page for my tailwind to take effect after each change?

Q: Why did my tailwind stop working and have to be uninstalled and reinstalled to work again?


creds:

beach img
Photo by <a href="https://unsplash.com/@rodrigoesant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rodrigo Silva</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
hut
Photo by <a href="https://unsplash.com/@yanivcphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yaniv Cohen</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

  lizard
  Photo by <a href="https://unsplash.com/@adriendlf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Adrien Delforge</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

  Style Guide:

  - Headers have 3xl sm screens 5xl large
  - body padding has 2-5rem (10 tw)