# Navbar with Icons :rocket:

A simple responsive navigation bar with icons built using HTML, CSS, and JavaScript. The navigation bar allows users to navigate through different sections of the website and uses Font Awesome icons for a visually appealing experience.

## How to Use :floppy_disk:

1. Clone the repository to your local machine.
2. Open `index.html` in your web browser to see the navbar in action.

## Features :star:

- Four navigation links with icons: Home, Search, Contact, and Login.
- Active link is highlighted with a different background color.
- Responsive design for smaller screens (max-width: 500px).

## Dependencies :link:

- Font Awesome v4.7.0 - [https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css)

## How it Works :gear:

- The `index.html` file contains the HTML structure for the navbar and includes the required Font Awesome stylesheet and custom `style.css`.
- The `style.css` file provides styling for the navbar and handles responsiveness for smaller screens.
- The `app.js` file contains a JavaScript function `setActive(menuId)` to set the active state for the clicked menu item and remove active state from other menu items.

## Customization :art:

- To add more menu items, simply add another `<a>` tag to the `index.html` file with a unique `id` and call the `setActive` function in the `onmouseover` attribute.
- You can change the background color for the active state by modifying the `.active` class in the `style.css` file.

## Contributions :raised_hands:

Contributions are welcome! If you find any issues or want to improve the navbar, feel free to create a pull request.

## License :scroll:

This project is licensed under the [MIT License](LICENSE).

## Author :pencil:

Created with ❤️ by [SK DAUD HASSAN](https://github.com/DaudGit)

