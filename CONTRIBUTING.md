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
      url: <codepen url>
      src: '<url to embed codepen demo>'
    },
    framework: '[React | React Native | Angular 2+ | AngularJS 1.x | Vue | Ember',
    version: '<version from package.json file>',
    license: '<MIT | APACHE 2.0 | BSD | All Rights Reserved | name as per LICENSE file>',
    details: '<component details page if any, otherwise gtihub url>',
    keywords: [<list of relevant words can be used to search the component>]
  }
```

`install` can be a single object or an array of objects. In most cases, it will be a single object with only `npm` details.
`demo` can have `repl` as `custom` or `codepen`


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


Please make sure that a thumbnail is added to the component page in http://localhost:4200 for the JSON you added. Also the demo should show within the thumbnail body. All links that show up in the thumbnail should redirect to the correct page.

Commit message should have format:
```
  component(<framework/library>): <component name>
  framework/library: react, react-native, angular, angularjs, vue, ember
  
  e.g. component(react): react-dates
```

