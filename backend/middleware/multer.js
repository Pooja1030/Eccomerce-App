import multer from 'multer';
import path from 'path';

// Set up the storage configuration for multer
const storage = multer.diskStorage({
    // Specify the destination directory for uploaded files
    destination: function (req, file, callback) {
        callback(null, 'uploads/'); // Ensure this directory exists
    },
    // Specify the filename for the uploaded files
    filename: function (req, file, callback) {
        // Extract the file extension
        const ext = path.extname(file.originalname);
        // Create a unique filename using Date and original name
        const uniqueName = `${Date.now()}-${file.fieldname}${ext}`;
        callback(null, uniqueName);
    },
});

// Create the multer upload instance with storage settings
const upload = multer({ storage });

// Export the upload instance for use in routes
export default upload;
