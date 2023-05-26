import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
   const handleSearch = (event) => {
      const searchValue = event.target.previousSibling.value;
      props.onSearch(searchValue);
   };
   return (
      <div className={styles.container}>
         <input type='search' />
         <button onClick={handleSearch}>Agregar</button>
      </div>
   );
}
