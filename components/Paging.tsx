import React from 'react'

export const Paging = ({ page, maxPages, setPage }) => {
  return (
    <div className='p-4 bg-graphite flex justify-between rounded-b-lg'>
      <span className='pt-1'>
        Page: {page} / {maxPages}
      </span>
      <div className='space-x-2'>
        <button
          className='px-6 py-1 bg-dark-grey rounded-md'
          onClick={() =>
            setPage((current) => (current >= 2 ? current - 1 : current))
          }>
          Prev
        </button>
        <button
          className='px-6 py-1 bg-dark-grey rounded-md'
          onClick={() =>
            setPage((current) => (current < maxPages ? current + 1 : current))
          }>
          Next
        </button>
      </div>
    </div>
  )
}
