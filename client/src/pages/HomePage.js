import React, { useState, useEffect, useCallback } from "react";
import Layout from "./../components/Layout/Layout.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices.js";
import { useCart } from "../Context/cart.js";
import toast from "react-hot-toast";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // ✅ Base API from environment variable
  const API = process.env.REACT_APP_API;

  // 🟩 Fetch all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${API}/api/v1/category/get-category`);
      if (data?.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // 🟦 Fetch all products (initially)
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API}/api/v1/product/product-list/${page}`);
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  // 🟨 Fetch total product count
  const getTotal = async () => {
    try {
      const { data } = await axios.get(`${API}/api/v1/product/product-count`);
      setTotal(data?.total);
    } catch (error) {
      console.error("Error getting total:", error);
    }
  };

  // 🟧 Load more products (pagination)
  const loadMore = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API}/api/v1/product/product-list/${page}`);
      setProducts((prev) => [...prev, ...data.products]);
      setLoading(false);
    } catch (error) {
      console.error("Error loading more products:", error);
      setLoading(false);
    }
  }, [API, page]);

  // 🟪 Filter products by category/price
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`${API}/api/v1/product/product-filters`, {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.error("Error filtering products:", error);
    }
  };

  // 🟠 Category checkbox filter
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };


// 🧩 useEffect hooks
// eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    getAllCategory();
    getTotal();
    getAllProducts();
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (page !== 1) loadMore();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [page, loadMore]);

// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!checked.length && !radio.length) {
      getAllProducts();
    } else {
      filterProduct();
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked, radio]);

  return (
    <Layout title={"All Products - Best offers"}>
      <div className="container-fluid row mt-3">
        {/* Sidebar Filters */}
        <div className="col-md-2">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>

          {/* Price Filter */}
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>

          {/* Reset Filters */}
          <div className="d-flex flex-column mt-3">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>

        {/* Products Section */}
        <div className="col-md-9 offset-1">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                <img
                  src={`${API}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text">$ {p.price}</p>
                  <button
                    className="btn btn-primary ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-secondary ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem("cart", JSON.stringify([...cart, p]));
                      toast.success("Item Added to cart");
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="m-2 p-3 text-center">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Load More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
