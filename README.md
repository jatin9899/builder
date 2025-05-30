<<<<<<< HEAD
# random-gifs
=======
# website-builder
🏗️ Application Architecture
📁 src/
Top-level source folder for the React app.

📄 index.js
Entry Point
Renders the root <App /> component into the DOM.


Wraps it in <React.StrictMode> for highlighting potential issues.



ReactDOM.createRoot(document.getElementById("root")).render(<App />);


📄 App.js
Main Component
Renders the <Builder /> component which holds the entire builder UI.


g
function App() {
  return <Builder />;
}


📁 components/
Holds all the key UI and logic components for the drag-and-drop builder.

🧱 Component Breakdown

📄 Builder.js
Main Layout & Logic Controller
Wraps children in <DndProvider> (for drag-and-drop support).


Maintains the state:


elements: All elements dropped on canvas.


selectedId: Currently selected element.


Renders three columns:


<Toolbox /> – list of draggable items.


<Canvas /> – drop area for elements.


<PropertiesForm /> – edit properties of the selected element.


🧠 Controls state and connects all components.

📄 Toolbox.js
Sidebar for draggable elements
Shows a list of available element types (e.g., "Text", "Image", "Button").


Each type is rendered as a <ToolboxItem />.



📄 ToolboxItem.js
Single draggable item
Uses useDrag() from react-dnd.


Drags the type (e.g., "Text") as an item with type ELEMENT.



📄 Canvas.js
Droppable area
Uses useDrop() to accept dropped items from the toolbox.


Adds new elements to the elements list with:


id, type, and empty properties.


Displays all dropped elements in a grid layout.


Clicking an element sets it as selected.



📄 PropertiesForm.js
Edit selected element
Shows an input to edit the label of the selected element.


Calls updateElement() to modify the selected item in elements.



🧠 State Management Flow
txt
CopyEdit
ToolboxItem (draggable)
    |
Canvas (droppable) --+--> adds to Builder state (elements)
                      |
Builder -- maintains elements & selectedId
  ├── Canvas -- handles element display and selection
  ├── Toolbox -- shows draggable items
  └── PropertiesForm -- edits selected element properties


📦 External Libraries
React DnD (react-dnd, react-dnd-html5-backend): handles drag-and-drop.


Tailwind CSS (likely used for styling): class-based utility styling.

>>>>>>> 77e89de1c49a5ab05a526bb0b5ae0dfba291d8cb
#   w e b _ b u i l d e r  
 