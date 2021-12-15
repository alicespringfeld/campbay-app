import SearchBar from './SearchBar';

export default {
  component: SearchBar,
  title: 'Components/SearchBar',
};

export const Default = () => <SearchBar onSearch={console.log} />;
