# Shadowize

Apply shadow effects and additional styling options to specified elements with ease.

## Installation

Install the package using npm:

```bash
npm install shadowize --save
```

## Usage
Import the Shadowize function and apply it to your elements.

```bash
// Import the Shadowize function
import { Shadowize } from 'shadowize';

// Select elements with a specific class and apply shadow effects
Shadowize('.shadowize', {
  shadow_type: 'hard', // 'hard' or 'soft' shadow
  padding: true,
  border_radius: true,
  border: true,
  margin: true,
  width: true,
  height: true,
  background: true,
});

```

## Parameters
selector (string): The CSS selector for the target elements.
options (object): An object containing styling options.


## Options
shadow_type (string): Specify the type of shadow ('hard' or 'soft'). Defaults to 'soft'.
padding (boolean): Add padding to the elements. Defaults to false.
border_radius (boolean): Apply border radius to the elements. Defaults to false.
border (boolean): Add a border to the elements. Defaults to false.
margin (boolean): Add margin to the elements. Defaults to false.
width (boolean): Set the width of the elements to 100%. Defaults to false.
height (boolean): Set the height of the elements to 100%. Defaults to false.
background (boolean): Set a background color to the elements. Defaults to false.

## Examples
Apply a soft shadow with additional styling options:
```bash
Shadowize('.custom-elements', {
  shadow_type: 'soft',
  padding: true,
  border_radius: true,
  margin: true,
});

```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please read the Contributing Guide for details on how to contribute to this project.


## Issues
Found a bug or have a feature request? Create an issue on the issue tracker.


## Changelog
See the CHANGELOG.md file for details about changes to the project.


## Acknowledgments
Special thanks to [Xanmoy] for their contributions..