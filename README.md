# React Counter App

A simple and responsive counter application built using React and `useState()`.

## Features

* Increase counter by 1
* Decrease counter by 1
* Reset counter to 0
* Increase counter by 5
* Interactive button hover effects
* Clean centered UI design

## Built With

* React
* JavaScript
* CSS3

## Concepts Practiced

* React Functional Components
* `useState` Hook
* Event Handling
* State Updates
* Conditional UI Styling
* CSS Grid Layout
* Flexbox Centering

## How It Works

The app stores the counter value in React state.

```jsx
const [num, setNum] = useState(0);
```

Buttons update the state:

* Increase → `+1`
* Decrease → `-1`
* Reset → `0`
* Increase by 5 → `+5`

Whenever state changes, React re-renders the UI automatically.

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/pallavi-676/react-counter-app.git
```

2. Move into project folder

```bash
cd react-counter-app
```

3. Install dependencies

```bash
npm install
```

4. Start development server

```bash
npm run dev
```


## Project Structure

```text
src/
 ├── App.jsx
 ├── index.css
 └── main.jsx
```

## Future Improvements

* Dark mode toggle
* Sound effects on click
* Prevent negative values
* Animated counter transitions
* Mobile responsive enhancements

## Author

**Pallavi Sarovar**
