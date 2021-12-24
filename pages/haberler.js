import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Container from "../components/Container";

function haberler() {
  return (
    <Layout>
      <Container>
        <div className="flex flex-wrap overflow-hidden xl:-mx-3">
          <div class="w-full overflow-hidden py-2 sm:my-1 sm:px-1 sm:w-1/2 md:my-2 md:px-2 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-5 xl:px-5 xl:w-1/5">
            <Card />
          </div>
          <div class="w-full overflow-hidden py-2 sm:my-1 sm:px-1 sm:w-1/2 md:my-2 md:px-2 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-5 xl:px-5 xl:w-1/5">
            <Card />
          </div>
          <div class="w-full overflow-hidden py-2 sm:my-1 sm:px-1 sm:w-1/2 md:my-2 md:px-2 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-5 xl:px-5 xl:w-1/5">
            <Card />
          </div>
          <div class="w-full overflow-hidden py-2 sm:my-1 sm:px-1 sm:w-1/2 md:my-2 md:px-2 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-5 xl:px-5 xl:w-1/5">
            <Card />
          </div>
          <div class="w-full overflow-hidden py-2 sm:my-1 sm:px-1 sm:w-1/2 md:my-2 md:px-2 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-5 xl:px-5 xl:w-1/5">
            <Card />
          </div>
          <div class="w-full overflow-hidden py-2 sm:my-1 sm:px-1 sm:w-1/2 md:my-2 md:px-2 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-5 xl:px-5 xl:w-1/5">
            <Card />
          </div>
          <div class="w-full overflow-hidden py-2 sm:my-1 sm:px-1 sm:w-1/2 md:my-2 md:px-2 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-5 xl:px-5 xl:w-1/5">
            <Card />
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default haberler;
