import { useSearchParams } from "react-router-dom";
import { SearchForm } from "components/SearchForm";

// import { SearchTypeSelector } from "components/SearchTypeSelector";

// import { SearchBar } from './SearchBar.styled';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("query");

  const updateSearch = ({ query }) => {
    setSearchParams({
      query,
    });
  };
  return (
    <div>
      <SearchForm onSubmit={updateSearch} />
      <SearchTypeSelector />
    </div>
  );
};
