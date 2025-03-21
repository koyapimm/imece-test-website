import React from "react";
import "../../styles/landingPage_styles/saticilar.css";
import { useState } from "react";
import { useEffect } from "react";
const Saticilar = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sellers, setSellers] = useState([]);
  const apiUrl = "https://imecehub.com/api/sirketler/";
  const apiKey = "WNjZXNttoxNzM5Mzc3MDM3LCJpYXQiOUvKrIq06hpJl_1PenWgeKZw_7FMvL65DixY";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setSellers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="satici-container">
      <div className="satici-container-saticilar">Saticilar</div>
      {isLoading ? (
        <p>Yükleniyor...</p>
      ) : error ? (
        <p>Hata: {error}</p>
      ) : (
        <div className="categories-list scrollbar-hide">
          {sellers.map((seller, index) => (
            <div key={index} className="">
              {/*
              <img 
                src={
                  seller.logo ||
                  "https://s3-alpha-sig.figma.com/img/ebab/4772/fece3f97244726a20a8e0f7945edd37e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oq3Gpu9gMnqe~p3NRjPbVQnBSqK5vHexROMkh2yewhm5USW4Z-rexMj87Lxr0qr3aeGuIR0rI8z9KKidZyo68Gf47P-1uuR7VbkhkaKlgyKVeyfR5v8SB4waL~5wnqxzzBokyGpK-dGfVDO6T0sxYlLxh0o5EafLQ-pbrV5PIEn70xYDCKucMpE3aXVCf~NqLG7d3QvH3cMU7JPNqw2osWZUDCTpT61W4FqMzCjuU5qPx7zWcdVrwneIX9f5hMdp-WV7GxZGVVPn85cMaSNhsBfnFsHohZWh7oHlj5-tAqL8-w5OQhjN6G6ABRKjRtTNHVMQx4r0hNr5NsjRJfI1aQ__"
                }
                alt={seller.adi}
                className="ml-2"
              />
              */}
              <p className="text-center capitalize ml-12 font-bold text-2xl cursor-pointer">{seller.adi}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Saticilar;
