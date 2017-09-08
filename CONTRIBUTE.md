# Contribution to the app

This is Angular 4 project.

If you want to add features, please add to respective components, services, pipe in their respective folders under app folder

# To Add a component to the list of components

There are specific .ts files under /src/app/data folder e.g. `react-components.ts`.

Please add a JSON for each component in these files.

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

`demo` can have `repl` as `custom`, `codepen`
