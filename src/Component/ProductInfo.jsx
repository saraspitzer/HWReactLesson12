import React from 'react'
import { useParams } from 'react-router-dom'

// מקבל את המזהה מה-URL ואת כל המוצרים כ־props
const ProductInfo = ({ products,setCartProducts }) => {
  // שולף את ה-id מהכתובת בדפדפן (לדוגמה: /product-info/2 => id=2)
  const { id } = useParams()

  // מוצא את המוצר ברשימה לפי ה-id (צריך להמיר מ-string ל-number)
  const p = products.find(pro => pro.id === parseInt(id))

  // אם לא נמצא מוצר מתאים – מציג הודעה
  if (!p) {
    return <div>Product not found</div>
  }
return (
    <div className='container'>
    <div className='product-card'>
        <h3>{p.name}</h3>
          <img src={`/Pics/${p.image}`} alt={p.name} style={{ width: '150px', borderRadius: '8px' }} />
          <h6>Price: {p.price} ILS</h6>
          <h6>Amount of pieces: {p.amountOfPieces}</h6>
          <button onClick={()=>window.history.back()}>Back</button>
    </div>
    </div>
  )
}

export default ProductInfo