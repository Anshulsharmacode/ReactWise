# Laboratory Supply Store — HTE Plates

A lightweight, clean React storefront built for laboratory researchers to browse and order High-Throughput Experimentation (HTE) reaction plates.

The focus here was building a simple, production-ready frontend using idiomatic React—sticking strictly to functional components, native hooks, and predictable immutable state patterns without overcomplicating things with third-party state managers or unnecessary abstractions.

---

## What It Does

- **Product Catalog**: Lists all 4 specialized HTE plates with names and fixed pricing.
- **Smart Cart Management**:
  - Adding an item for the first time initializes it with quantity `1`.
  - Adding the same item again increments the existing item's quantity without creating duplicate rows.
  - Updates occur immutably using modern array methods (`map`, spread operator).
- **Dynamic Line Items**: Each cart row recalculates its subtotal (`price * quantity`) automatically.
- **Order Summary**: Derives total units ordered and total price on the fly using `reduce()`. No duplicate state, no desync issues.
- **Empty State**: Shows a clean message when the cart has no items.

---

## Project Structure

Components are kept small and adhere to single-responsibility boundaries:

```text
src/
├── components/
│   ├── ProductList.jsx    # Renders the collection of catalog items
│   ├── ProductItem.jsx    # Displays individual product details & "Add to Cart" action
│   ├── Cart.jsx           # Renders the cart container and handles empty state
│   ├── CartItem.jsx       # Displays item name, current quantity, and line subtotal
│   └── OrderSummary.jsx   # Calculates and displays total items and final total
├── data/
│   └── products.js        # Static HTE product catalog (untouched & separated from UI)
├── App.jsx                # Holds top-level cart state & coordinates child components
└── main.jsx               # Application entry point with React StrictMode
```

---

## Architectural Decisions

1. **State Lifted to Parent (`App.jsx`)**  
   The cart state (`useState([])`) lives in `App`, acting as the single source of truth. Child components receive only the minimal props and callbacks they actually need.

2. **Derived State Over Redundant State**  
   Totals (`totalQuantity` and `totalPrice`) are calculated directly from `cart` inside `OrderSummary` using `Array.prototype.reduce()`. Storing totals in separate state variables is an anti-pattern that easily leads to state drift.

3. **Immutable Updates**  
   When updating the cart, we never mutate `cart` directly:
   ```jsx
   setCart((prevCart) => {
     const existingItem = prevCart.find((item) => item.id === product.id);

     if (existingItem) {
       return prevCart.map((item) =>
         item.id === product.id
           ? { ...item, quantity: item.quantity + 1 }
           : item
       );
     }

     return [...prevCart, { ...product, quantity: 1 }];
   });
   ```

4. **Zero Extra Dependencies**  
   No external routing, Redux, Zustand, or styling libraries. Pure React and standard HTML semantics.

---

## Getting Started

### Prerequisites
Make sure you have Node.js (v18+) and npm installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser at the URL shown in your terminal (typically `http://localhost:5173/`).

### 3. Production Build
To create an optimized production build:
```bash
npm run build
```
You can preview the built bundle with:
```bash
npm run preview
```
