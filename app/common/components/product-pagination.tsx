import { useSearchParams } from "react-router";
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationEllipsis,
  PaginationNext,
} from "./ui/pagination";
import { data } from "react-router";
type ProductPaginationProps = {
  totalPages: number;
};

export default function ProductPagination({
  totalPages,
}: ProductPaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);

  const getUrlWithPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    return `?${params}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        {page !== 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious to={getUrlWithPage(page - 1)} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink to={getUrlWithPage(page - 1)}>
                {page - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink to={getUrlWithPage(page)} isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        {page !== totalPages && (
          <>
            <PaginationItem>
              <PaginationLink to={getUrlWithPage(page + 1)}>
                {page + 1}
              </PaginationLink>
            </PaginationItem>
            {page + 1 !== totalPages && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext to={getUrlWithPage(page + 1)} />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
}
