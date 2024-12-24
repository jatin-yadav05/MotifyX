import { patterns, getPatternsByCategory } from '../data/patterns'

const PatternGrid = ({ category }) => {
  const categoryPatterns = getPatternsByCategory(category)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categoryPatterns.map((pattern) => (
        <PatternCard key={pattern.id} pattern={pattern} />
      ))}
    </div>
  )
}

export default PatternGrid 