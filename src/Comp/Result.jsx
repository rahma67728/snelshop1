import React from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Result(){
    const items = useSelector(store=>store.items)
    const dispatch = useDispatch()
    return(
        <>
            <div className="att">
                <span>Order Details</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Total</span>
            </div>
            {items.map(e=>
                <div key={e.id} className="cart">
                    <span>
                        <img src={e.src} alt="shoe" />
                        <div>
                            <p className='m-0'>{e.desc}</p>
                            <p onClick={()=>dispatch({type:'delete',payload:{e:e}})} className='m-0 remove text-danger'></p>
                        </div>
                    </span>
                    <span>
                       <button onClick={() => {
        if (e.qt === 1) {
            dispatch({ type: 'delete', payload: { e } });
        } else {
            dispatch({ type: 'decrement', payload: { e } });
        }
    }}>
        -
    </button>

                        <p className='m-0'>{e.qt}</p>
                        <button onClick={()=>dispatch({type:'increment',payload:{e:e}})}>+</button>
                    </span>
                    <span className='fw-semibold'>Rp.{e.price}.000</span>
                    <span className='fw-semibold'>Rp.{e.total}.000</span>
                </div>
            )}
        </>
    )
}