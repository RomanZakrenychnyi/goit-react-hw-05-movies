import { searchMovieByName } from '../../Service/API';

export const MovieSearch = () => {
  const handleSearchFilms = async event => {
    event.preventDefault();
    const inputSearch = event.target.children.input.value;
    event.target.children.input.value = '';
    const result = await searchMovieByName(inputSearch);
    console.log(result);
    return result;
  };

  return (
    <form action="" onSubmit={handleSearchFilms}>
      <input name="input" type="text" />
      <button>Search</button>
    </form>
  );
};
