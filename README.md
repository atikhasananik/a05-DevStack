# DevStack

#### this is the project that show many technologies and you can select all tecnology. also you remove those technology from your stack. in this project i fetch the json data and use this data.

## ⚙️ Technology That I Use Here

- React.js
- Tailwind CSS, DaisyUI
- TypeScript / JavaScript (ES6+)
- React-Toastify (NPM Package)
- JSON (for technology data)
- Vite (build tool)

## 3 features about my project

1. Explore different technologies for web development.
2. Build your own custom tech stack.
3. Remove items easily and manage your project setup.

# React Questions and Answers

### i. What is JSX, and why is it used in React?

**Ans:** JSX is JavaScript XML. That's the way to write JavaScript and HTML code together. That's why React uses JSX.

### ii. What is the difference between props and state?

**Ans:** Props are a way of passing data from parent to child, and state is data that can be changed.

### iii. What does the useState hook do, and where did you use it in this project?

**Ans:** The useState hook holds the value, and when the state changes, it re-renders the component. I used the useState hook in my project for holding the SelectedCard. I created it in the parent component; that's why it can be used by the children.

### iv. What does the useEffect hook do, and why did you need it to load the JSON data?

**Ans:** The useEffect hook provides us side effects inside React. Loading JSON data is an async functionality. You don't know when the data fetching will be completed. It gives us a promise. That's why we use the useEffect hook; it allows us to fetch data separately.

### v. Why does every item in a `.map()` list need a unique `key` prop?

**Ans:** For better performance, React needs a unique key prop for every item in a `.map()`.

### vi. What is conditional rendering? Show one place you used it.

**Ans:** When you render components based on any condition, that's conditional rendering. I used it here:

```jsx
{
  selected.length === 0 ? (
    <div className="border border-gray-300 p-8 rounded-2xl">
      <div>
        <h2 className="text-2xl font-semibold">Your Stack</h2>

        <p style={{ color: "ver(--text-color)" }} className="">
          No Technology Selected Yet
        </p>
      </div>

      <div className="grid gap-4 mt-4">
        <div
          style={{ color: "var(--text-color)" }}
          className="p-5 py-6 border border-dashed text-center border-gray-300 rounded-2xl flex items-center justify-center gap-3"
        >
          Your stack is empty.
        </div>
      </div>
    </div>
  ) : (
    <SelectedTechCard selected={selected} setSelected={setSelected} />
  );
}
```

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Ans:** I pass data from a parent component to a child component using props, and I send something back to the parent using the lifting-up system.
