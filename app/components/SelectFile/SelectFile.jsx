import { UploadIcon } from '../Icons'

export default function SelectFile({
  clsNInput,
  title,
  placeholder,
  clsN,
  onChange,
  accept,
  children,
  ...moreProps
}) {
  return (
    <div className={`w-full mb-4 ${clsN}`}>
      {title && <p className="block text-sm mb-1 font-medium">{title}</p>}

      <div
        className={`flex gap-4 w-full align-middle bg-white border-solid border-2 border-gray-300 rounded-md ${clsNInput}`}>
        <label className="w-full flex gap-4 p-3 cursor-pointer">
          <UploadIcon />
          <span className="mt-1 text-sm font-medium leading-normal text-gray-600">
            {placeholder}
          </span>
          <input
            accept={accept || 'image/*'}
            data-testid="input-file"
            onChange={onChange}
            type="file"
            className="hidden"
            {...moreProps}
          />
        </label>
      </div>

      {children}
    </div>
  )
}