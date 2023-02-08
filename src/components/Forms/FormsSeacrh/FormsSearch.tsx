import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../../Contexts/UserContext/UserContext";
import { StyledFormSearch } from "./style";
import { FaSearch } from "react-icons/fa";

interface iFormSearchData {
  search: string;
}

interface iFormsSearchProps {
  className: string;
  searchRef: React.RefObject<HTMLDivElement>;
}

export const FormsSearch = ({ searchRef, className }: iFormsSearchProps) => {
  const { getProducts } = useContext(UserContext);
  const { register, handleSubmit, reset } = useForm<iFormSearchData>();

  const submit: SubmitHandler<iFormSearchData> = (data) => {
    getProducts(data.search);
    reset();
  };

  return (
    <StyledFormSearch className={className} onSubmit={handleSubmit(submit)}>
      <div ref={searchRef}>
        <input
          type="text"
          {...register("search")}
          placeholder="Digitar pesquisa"
        />
        <button>
          <FaSearch className="magnifier-icon" />
        </button>
      </div>
    </StyledFormSearch>
  );
};
