// import { MainPageTitle } from "components/MainPageTitle";
import { SearchBar } from "./SearchBar/SearchBar";

const SearchPage = () => {
  return (
    <div>
      <h1 className="page-title">Search page</h1>
      {/* <MainPageTitle title="Search" /> */}
      <SearchBar />
    </div>
  );
};

export default SearchPage;
