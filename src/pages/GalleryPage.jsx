import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import dataGalleries from '../data/galleries.json';
import { Banner } from '../layouts/Banner';
import { Button } from '../components/Button';
import { CardImage } from '../components/CardImage';

export const GalleryPage = () => {
  // Mengambil kategori dan subkategori dari localStorage atau set ke nilai default pertama kali
  const initialCategory = JSON.parse(localStorage.getItem('activeCategory')) || dataGalleries.categories[0];
  const initialSubcategory = JSON.parse(localStorage.getItem('activeSubcategory')) || null;

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeSubcategory, setActiveSubcategory] = useState(initialSubcategory);
  const [contentData, setContentData] = useState([]);

  // Update konten berdasarkan kategori dan subkategori
  useEffect(() => {
    if (activeCategory?.subcategories?.length && activeSubcategory) {
      const subcategoryData = activeCategory.subcategories.find((sub) => sub.subcategory === activeSubcategory.subcategory);
      setContentData(subcategoryData?.data || []);
    } else {
      // Menggabungkan data semua subkategori jika ada
      const combinedData = activeCategory.subcategories?.reduce((acc, sub) => [...acc, ...sub.data], []) || activeCategory.data;
      setContentData(combinedData || []);
    }
  }, [activeCategory, activeSubcategory]);

  // Saat kategori dipilih
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveSubcategory(null); // Reset subkategori saat kategori baru dipilih

    // Menentukan konten berdasarkan kategori
    const combinedData = category.subcategories?.reduce((acc, sub) => [...acc, ...sub.data], []) || category.data;

    setContentData(combinedData || []);
    localStorage.setItem('activeCategory', JSON.stringify(category)); // Menyimpan kategori ke localStorage
    localStorage.removeItem('activeSubcategory'); // Menghapus subkategori yang lama
  };

  // Saat subkategori dipilih
  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(subcategory);
    const subcategoryData = activeCategory.subcategories?.find((sub) => sub.subcategory === subcategory.subcategory);
    setContentData(subcategoryData?.data || []);
    localStorage.setItem('activeSubcategory', JSON.stringify(subcategory)); // Menyimpan subkategori ke localStorage
  };

  return (
    <>
      <Banner title={dataGalleries.title} page="Spots Gallery" />

      <main className="main-gallery">
        {/* Tombol Kategori */}
        <section className="category-button">
          <h3>Category:</h3>
          <ul>
            {dataGalleries.categories.map((category) => (
              <li key={category.id}>
                <Button onClick={() => handleCategoryClick(category)} className={activeCategory.id === category.id ? 'button-active' : ''}>
                  {category.category}
                </Button>
              </li>
            ))}
          </ul>
        </section>

        {/* Tombol Subkategori (hanya tampil jika kategori memiliki subkategori) */}
        {activeCategory.subcategories?.length > 0 && (
          <section className="subcategory-button">
            <h3>Choose subcategory:</h3>
            <ul>
              {activeCategory.subcategories.map((subdata) => (
                <li key={subdata.id}>
                  <Button onClick={() => handleSubcategoryClick(subdata)} className={activeSubcategory?.id === subdata.id ? 'button-active' : ''}>
                    {subdata.subcategory}
                  </Button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Konten yang Ditampilkan */}
        <section className="content">
          <ul>
            {contentData.map((data) => (
              <li key={data.id}>
                <Link to={`/gallery-detail/${data.id}`}>
                  <CardImage src={data.poster_path}>
                    <h4>{data.name}</h4>
                  </CardImage>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};
