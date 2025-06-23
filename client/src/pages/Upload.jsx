import React, { useState } from "react";

const UploadCourse = () => {
  const [video, setVideo] = useState(null);
  const [materials, setMaterials] = useState(null);
  const [externalLink, setExternalLink] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const handleFileChange = (event, setter) => {
    const file = event.target.files[0];
    if (file) {
      setter(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!video) {
      alert("Please upload a course video.");
      return;
    }
    alert("Course Uploaded Successfully!");
  };

  return (
    <div className="container py-5">
      {/* Upload Course Form */}
      <div className="card shadow-lg mx-auto p-5" style={{ maxWidth: "700px" }}>
        <h2 className="text-center mb-4">Upload Course Content</h2>
        <form onSubmit={handleSubmit}>
          
          {/* Upload Video */}
          <div className="mb-4">
            <label className="form-label fs-5"><strong>Upload Course Video (Required)</strong></label>
            <input 
              type="file" 
              className="form-control form-control-lg" 
              accept="video/mp4,video/avi,video/mov" 
              onChange={(e) => handleFileChange(e, setVideo)}
              required
            />
            {video && <p className="mt-2 text-success fs-5">Selected: {video.name}</p>}
          </div>

          {/* Upload Course Materials */}
          <div className="mb-4">
            <label className="form-label fs-5"><strong>Upload Course Materials (Optional)</strong></label>
            <input 
              type="file" 
              className="form-control form-control-lg" 
              accept=".pdf,.ppt,.pptx,.doc,.docx" 
              onChange={(e) => handleFileChange(e, setMaterials)}
            />
            {materials && <p className="mt-2 text-info fs-5">Selected: {materials.name}</p>}
          </div>

          {/* External Course Link */}
          <div className="mb-4">
            <label className="form-label fs-5"><strong>External Course Link (Optional)</strong></label>
            <input 
              type="url" 
              className="form-control form-control-lg" 
              placeholder="Enter YouTube/Vimeo link" 
              value={externalLink} 
              onChange={(e) => setExternalLink(e.target.value)}
            />
          </div>

          {/* Upload Thumbnail */}
          <div className="mb-4">
            <label className="form-label fs-5"><strong>Upload Course Thumbnail</strong></label>
            <input 
              type="file" 
              className="form-control form-control-lg" 
              accept="image/png, image/jpeg" 
              onChange={(e) => handleFileChange(e, setThumbnail)}
            />
            {thumbnail && <p className="mt-2 text-warning fs-5">Selected: {thumbnail.name}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success btn-lg w-100">Upload Course</button>
        </form>
      </div>
    </div>
  );
};

export default UploadCourse;