import React, { useState, useRef } from 'react';
import { ReactComponent as FileUpload } from 'assets/icons/file-upload.svg';

function DropZone({ accept, maxSize, onFileUpload }) {
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const files = e.dataTransfer.files;
    // Обработка загруженных файлов

    if (files.length > 0) {
      onFileUpload(files[0]);
    }
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    // Обработка выбранных файлов

    if (files.length > 0) {
      onFileUpload(files[0]);
    }
  };

  return (
    <div
      className={`drop-zone ${dragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current.click()}
    >
      <div className='drop-zone--placeholder'>
        <FileUpload />
        <label className='font-caption--2'>
          {
            accept.split(', ').map(extension => extension.toUpperCase().replace('.', '')).join(', ')
            + ' '
            + 'Max ' + maxSize
          }
        </label>
      </div>
      <input
        type="file"
        accept={accept}
        max={maxSize}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
        ref={fileInputRef}
      />
    </div>
  );
}

export default DropZone;
