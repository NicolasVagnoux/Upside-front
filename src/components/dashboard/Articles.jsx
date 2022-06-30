import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Import Swiper React components
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// ----------------------------------------------

const Articles = () => {
  return (
    <div className="w-full flex flex-wrap items-center m-10">
      <div className="w-full m-auto">
        <Card color="paper" className=" w-full cursor-pointer">
          <CardContent>
            <>
              <Swiper
                direction="vertical"
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                grabCursor
                className="w-full h-48"
              >
                <SwiperSlide>
                  <Typography sx={{ fontSize: 20 }} color="text.secondary">
                    APSIDE / News
                  </Typography>
                  <Typography sx={{ fontSize: 12 }}>Estelle Chardac</Typography>
                  <Typography sx={{ mb: 0.5 }} color="text.secondary">
                    TEXT1
                  </Typography>
                </SwiperSlide>
                <SwiperSlide>
                  <Typography sx={{ fontSize: 20 }} color="text.secondary">
                    APSIDE / News
                  </Typography>
                  <Typography sx={{ fontSize: 12 }}>Estelle Chardac</Typography>
                  <Typography sx={{ mb: 0.5 }} color="text.secondary">
                    TEXT2
                  </Typography>
                </SwiperSlide>
                <SwiperSlide>
                  <Typography sx={{ fontSize: 20 }} color="text.secondary">
                    APSIDE / News
                  </Typography>
                  <Typography sx={{ fontSize: 12 }}>Estelle Chardac</Typography>
                  <Typography sx={{ mb: 0.5 }} color="text.secondary">
                    TEXT3
                  </Typography>
                </SwiperSlide>
                <SwiperSlide>
                  <Typography sx={{ fontSize: 20 }} color="text.secondary">
                    APSIDE / News
                  </Typography>
                  <Typography sx={{ fontSize: 12 }}>Estelle Chardac</Typography>
                  <Typography sx={{ mb: 0.5 }} color="text.secondary">
                    TEXT4
                  </Typography>
                </SwiperSlide>
                <SwiperSlide>
                  <Typography sx={{ fontSize: 20 }} color="text.secondary">
                    APSIDE / News
                  </Typography>
                  <Typography sx={{ fontSize: 12 }}>Estelle Chardac</Typography>
                  <Typography sx={{ mb: 0.5 }} color="text.secondary">
                    TEXT5
                  </Typography>
                </SwiperSlide>
                <SwiperSlide>
                  <Typography sx={{ fontSize: 20 }} color="text.secondary">
                    APSIDE / News
                  </Typography>
                  <Typography sx={{ fontSize: 12 }}>Estelle Chardac</Typography>
                  <Typography sx={{ mb: 0.5 }} color="text.secondary">
                    TEXT6
                  </Typography>
                </SwiperSlide>
              </Swiper>
            </>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Articles;
