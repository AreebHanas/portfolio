import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { FormLabel } from "@mui/material";
import gsap from "gsap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  scale: 0.8,
};

function ProjectModal({ toggleModal, projectDetails, openModal }) {
  const modalRef = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  useEffect(() => {
    if (toggleModal) {
      // Animate the modal when it opens
      gsap.to(modalRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [toggleModal]);

  const openImageViewer = (index) => {
    setCurrentImageIndex(index);
    setIsImageViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsImageViewerOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % projectDetails.snaps.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + projectDetails.snaps.length) % projectDetails.snaps.length
    );
  };

  return (
    <Modal
      keepMounted
      open={toggleModal}
      onClose={openModal}
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-description"
      ref={modalRef}
    >
      <Box ref={modalRef} sx={style}>
        <Typography
          id="project-modal-title"
          variant="h6"
          component="h2"
          sx={{ mb: 4 }}
        >
          {projectDetails.title || "Project Title"}
        </Typography>
        <FormLabel>Project details</FormLabel>
        <Typography
          id="project-modal-description"
          sx={{ mt: 2, mb: 4 }}
          component="h2"
        >
          {projectDetails.about || "Project description goes here."}
        </Typography>
        <FormLabel>Features</FormLabel>
        <Typography sx={{ mt: 2, mb: 4 }} component="h2">
          Features: {projectDetails.features || "No features listed."}
        </Typography>
        {projectDetails.snaps && projectDetails.snaps.length > 0 ? (
          <>
            <FormLabel>Project Screenshots</FormLabel>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                overflowX: "auto",
                gap: "10px",
                mt: 2,
                pb: 2,
              }}
            >
              {projectDetails.snaps.map((snap, index) => (
                <img
                  key={index}
                  src={snap}
                  alt={`Screenshot ${index + 1}`}
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.2s",
                    cursor: "pointer",
                  }}
                  onClick={() => openImageViewer(index)}
                />
              ))}
            </Box>
          </>
        ) : null}
        {projectDetails.url ? (
          <>
            <FormLabel>Demo</FormLabel>
            <Typography sx={{ mt: 2 }}>
              URL:{" "}
              <a
                href={projectDetails.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectDetails.url}
              </a>
            </Typography>
          </>
        ) : null}

        {/* Image Viewer */}
        {isImageViewerOpen && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1300,
            }}
          >
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "20px",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
              }}
              onClick={closeImageViewer}
            >
              &times;
            </button>
            <img
              src={projectDetails.snaps[currentImageIndex]}
              alt={`Screenshot ${currentImageIndex + 1}`}
              style={{
                maxWidth: "90%", // Increased width to 90% of the viewport
                maxHeight: "80%", // Adjusted height to leave space for buttons
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                marginBottom: "20px", // Add space between the image and buttons
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
                onClick={prevImage}
              >
                &#8249; Previous
              </button>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
                onClick={nextImage}
              >
                Next &#8250;
              </button>
            </Box>
          </Box>
        )}
      </Box>
    </Modal>
  );
}

export default ProjectModal;
