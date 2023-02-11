import { Calculator } from "../components";
import { History } from "../components";
import { wrapper } from "../store/store";
import { GetServerSideProps } from "next";
import { asyncActions } from "@/store/slices/CalculatorHistorySlice";

const { fetchHistory } = asyncActions;

const Index = () => {
  return (
    <div className="root d-flex justify-content-center">
      <History />
      <Calculator />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ params }) => {
    await store.dispatch(fetchHistory());
    return {
      props: {},
    };
  });
export default Index;
