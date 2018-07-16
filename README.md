# Flash-Facts

## Description
Contains grade-school reading and math facts! Right now, only contains
Grade 1 Facts

## Development
### Depdencies
1. Install [Yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable)
2. Install [Webpack](https://webpack.js.org/guides/installation/)
3. Install ```react``` and ```react-dom```
   ``` yarn add react react-dom```  
4. Install ```babel-core```, ```babel-loader```, ```babel-preset-env```, and 
   ```babel-preset-react``` as depdendencies  
   ``` yarn add babel-core babel-loader babel-preset-env babel-preset-react --dev```

### Building
To build in development mode:  
```
yarn run start
```

To build in production mode:  
```
yarn run build
```

These commands will create a dist folder with a bundle.js and index.html file inside, containing the code from ```src```.  

### References
For setting up webpack with ReactJS:  
https://medium.com/@fastlane80/setup-react-js-with-npm-babel-6-and-webpack-in-under-1-hour-1a714f973506  

https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75
