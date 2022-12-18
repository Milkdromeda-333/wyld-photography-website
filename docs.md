Solved problems:

- To put a background image inline use bg-[url(*path*)]. Make sure that the syntax is COMPLETE by typing out the pairs of charecters as you go. ALSO a relative path image needs to be typed out as if its from inside the dist file because thats how the css file will be served. 

- To use your own font you'll need to go inside the tailwind confic and the end property. Make a fontFamily property and name it and add the names of the fonts you imported. To refer to it in the file use `font-` and then the name you gave to it.

- Tailwind stopped working so I uninstalled and reinstalled and ran "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch" again. Accidentally ran `-full` when I re-installed.

Standing questions and problems:

Q: Is it normal to have to refresh my page for my tailwind to take effect after each change?

Q: Why did my tailwind stop working and have to be uninstalled and reinstalled to work again?


Style Guide:

  - Headers have 3xl sm screens 5xl large
  - body padding has 2-5rem (10 tw)