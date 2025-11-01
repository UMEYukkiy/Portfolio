type BoxProps = {
  title?: string
  content?: string
  imageUrl?: string
}

export default function Box({ title, content, imageUrl }: BoxProps) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 h-50 w-100">
      {imageUrl && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}

      <div className="relative z-10 p-6">
        {title && (
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        )}
        {content && (
          <p className="text-gray-600 leading-relaxed">{content}</p>
        )}
      </div>
    </div>
  )
}