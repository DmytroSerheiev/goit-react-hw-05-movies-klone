import { SearchForm, SearchButton, InputText } from './SearchBar.styled';
import { BiSearchAlt } from 'react-icons/bi';
import { Formik } from 'formik';

const initialValues = {
  query: '',
};
export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (value, { resetForm }) => {
    if (value.query.trim() === '') {
      return;
    }
    onSubmit(value.query);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <SearchForm>
        <SearchButton type="submit">
          <BiSearchAlt />
        </SearchButton>

        <InputText name="query" type="text" />
      </SearchForm>
    </Formik>
  );
};
