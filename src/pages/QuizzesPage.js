export default function QuizzesPage() {
  return (
    <div>
      <SearchBar
        level={filters.level}
        topic={filters.topic}
        onChange={changeFilters}
        onReset={resetFilters}
      />
      {loading && <div>LOADING...</div>}
      {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}
      {visibleItems.length > 0 && (
        <QuizList items={visibleItems} onDelete={deleteQuiz} />
      )}
    </div>
  );
}
