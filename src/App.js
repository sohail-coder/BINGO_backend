import "./App.css";
function App() {
  return (
    <div className="App">
      <button
        class="snipcart-add-item"
        data-item-id="2"
        data-item-price="6.00"
        data-item-url="https://todo-mern-server.herokuapp.com/beacon"
        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        data-item-image="data:image/png;base64,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"
        data-item-name="beacon"
        data-item-custom1-name="Frame color"
        data-item-custom1-options="Black|Brown|Gold"
      >
        Add to cart
      </button>
    </div>
  );
}

export default App;
