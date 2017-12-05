# Contribution to the app

Thanks for your interest in contributing to the project.
This is an Angular 4 project.

## Adding Features
If you want to add features, please create a github issue first with feature details. If valid, the issue will be reassigned to you so that you can send a pull request for the same.
Add to Angular components, services, pipes in their respective folders under app folder. 

Please provide commit message in format
```
  feature[(issue id)]: <description>
```

## Fixing bugs
You can directly send a PR for bug fixes. Use commit message in format
```
  bug: <description>
```

## Adding a component to the list of components
Currently we are adding components list for the following frameworks and libraries:
* React
* React Native
* Angular 2+
* AngularJS 1.x
* Vue
* Ember

There are specific `*-components.ts` files under `/src/app/data` folder for each technology e.g. `react-components.ts`.

Please add a JSON object for each component in these files.

### Format of JSON
```
  {
    id: <incrementing integer>,
    name: '<name as in component page in github>',
    install: [{
      packager: 'npm',
      url: '<package name>'
    }, {
      packager: 'download',
      url: '<url of download page>'
    }, {
      packager: 'bower',
      url: '<package name>'
    }],
    source: {
      domain: 'github',
      url: '<github username/repo name>'
    },
    demo: {
      repl: 'custom',
      src: '<url of demo page>'
    } | {
      repl: 'codepen',
      user: '<username in codepen demo>',
      id: '<demo id>'
    } | {
      repl: 'plunker',
      id: <plnkr id>
    } | {
      repl: 'expo',
      url: <expo.io url>,
      expoUrl: '<expo url to open demo>',
      qrCode: '<name of image file at /src/assets/qr-codes for QR code>'
    }, | {
      repl: 'img',
      url: <demo page url>,
      imgUrl: '<link to image file>'
    },
    framework: '[React | React Native | Angular 2+ | AngularJS 1.x | Vue | Ember',
    version: '<version from package.json file>',
    license: '<MIT | APACHE 2.0 | BSD | All Rights Reserved | name as per LICENSE file>',
    details: '<component details page if any, otherwise gtihub url>',
    keywords: [<list of relevant words can be used to search the component>]
  }
```

`install` can be a single object or an array of objects. In most cases, it will be a single object with only `npm` details.
`demo` can have `repl` as `custom`, `codepen`, `plunker` or `expo`. Expo is primarily used for React Native component demos as those cannot be shown in a webpage.

An example JSON is:

```
  {
    id: 14,
    name: 'react-dates',
    install: [{
      packager: 'npm',
      url: 'react-dates'
    }],
    source: {
      domain: 'github',
      url: 'airbnb/react-dates'
    },
    demo: {
      repl: 'custom',
      src: 'http://airbnb.io/react-dates#startDate?selectedKind=DateRangePicker%20%28DRP%29&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=storybook%2Factions%2Factions-panel'
    },
    framework: 'React',
    version: '12.6.0',
    license: 'MIT',
    details: 'http://airbnb.io/react-dates',
    keywords: ['date', 'time', 'datepicker', 'calendar', 'daterange']
  }
```

For CodePen if the url is of format `https://codepen.io/:user/pen/:id`
You can pick the `user` and `id` fields from the url params above.


Please make sure that a thumbnail is added to the component page in http://localhost:4200 for the JSON you added. Also the demo should show within the thumbnail body. All links that show up in the thumbnail should redirect to the correct page.

Commit message should have format:
```
  component(<framework/library>): <component name>
  framework/library: react, react-native, angular, angularjs, vue, ember, web-component
  
  e.g. component(react): react-dates
```



### For React Native
Since React Native components cannot be demoed in a web page, expo.io is used to demo such components. Mostly the creator of a React Native component will provide a expo url. Please fill in those details in JSON in `react-native-components.ts` as per format above. Also save the QR Code as a png file in `src/assets/qr-codes` folder and provide the name of the image in the JSON.
