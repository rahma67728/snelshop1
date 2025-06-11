import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Result from "./Result";

export default function Orders() {
  const items = useSelector((store) => store.items);
  const total = useSelector((store) => store.total);
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch({ type: "total" });
}, [dispatch, items]); // ⬅️ perhatikan penambahan items di dependency array

  // ⬇️ State untuk form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    payment: "1",
  });

  // ⬇️ Handle perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleCheckout = () => {
  const { name, email, address, phone } = formData;

  // ✅ Cek apakah ada barang yang dipesan
  if (items.length === 0) {
    alert("Belum ada barang yang dipesan!");
    return;
  }

  // ✅ Cek apakah form sudah lengkap
  if (!name || !email || !address || !phone) {
    alert("Harap isi semua data pemesanan terlebih dahulu!");
    return;
  }

  alert("Terima kasih sudah memesan 😄");

  // Kosongkan form
  setFormData({
    name: "",
    email: "",
    address: "",
    phone: "",
    payment: "1",
  });

  // Hapus semua pesanan dari cart
  dispatch({ type: "clear" });
};


  return (
    <>
      <Header />
      <div className="shopCart">
        <div className="left">
          <h2 className="my-2">ORDER</h2>
          <hr className="my-4 text-light" />
          <div className="carts">
            {items.length > 0 ? (
              <Result />
            ) : (
              <p className="emprty">Belum Ada Pemesanan Sepatu</p>
            )}
          </div>
        </div>

        <div className="right p-4">
          <h4 className="my-3 ps-2">PEMESANAN</h4>
          <hr className="my-3" />

          <form>
            <p className="m-0">Metode Pembayaran</p>
            <select
              className="form-select"
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <option value="1">COD</option>
              <option value="2" disabled>
                Credit Card (Belum Tersedia)
              </option>
            </select>

            <p className="m-0 mt-2">NAMA</p>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Nama"
              value={formData.name}
              onChange={handleChange}
            />

            <p className="m-0 mt-2">EMAIL</p>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="user@email.com"
              value={formData.email}
              onChange={handleChange}
            />

            <p className="m-0 mt-2">ALAMAT</p>
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Alamat"
              value={formData.address}
              onChange={handleChange}
            />

            <p className="m-0 mt-2">NOMOR TELEPON</p>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="+62 8..."
              value={formData.phone}
              onChange={handleChange}
            />

            <p className="my-4 fw-semibold">Total : Rp.{total}.000</p>
            <input
              type="button"
              value="Pesan"
              onClick={handleCheckout}
              className="btn btn-dark"
            />
          </form>
        </div>
      </div>
    </>
  );
}
