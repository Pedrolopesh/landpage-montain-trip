import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Checklist } from "@/components/Checklist";
import { DestinationList } from "@/components/DestinationList";

vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

beforeEach(() => localStorage.clear());
afterEach(cleanup);

describe("DestinationList", () => {
  it("filtra pelos chips e mostra a contagem", () => {
    render(<DestinationList lang="pt" />);
    expect(screen.getByText("6 destinos")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Expedição" }));
    expect(screen.getByText("2 destinos")).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Monte Roraima" })).toBeTruthy();
    expect(screen.queryByRole("heading", { name: "Pico Paraná" })).toBeNull();
  });

  it("marca 'quero ir' e salva no navegador", () => {
    render(<DestinationList lang="pt" />);
    const save = screen.getByRole("button", { name: "Marcar como quero ir: Vale do Pati" });
    fireEvent.click(save);
    expect(save.getAttribute("aria-pressed")).toBe("true");
    expect(JSON.parse(localStorage.getItem("triper.saved") ?? "[]")).toEqual(["vale-do-pati"]);
    fireEvent.click(screen.getByRole("button", { name: /Quero ir/ }));
    expect(screen.getByText("1 destino")).toBeTruthy();
  });

  it("mostra estado vazio com ação para limpar", () => {
    render(<DestinationList lang="en" />);
    fireEvent.click(screen.getByRole("button", { name: /Want to go/ }));
    expect(screen.getByText(/You have not saved/)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Clear filters" }));
    expect(screen.getByText("6 destinations")).toBeTruthy();
  });

  it("ignora lixo no localStorage", () => {
    localStorage.setItem("triper.saved", "{quebrado");
    render(<DestinationList lang="pt" />);
    expect(screen.getByText("6 destinos")).toBeTruthy();
  });
});

describe("Checklist", () => {
  it("conta o progresso e permite recomeçar", () => {
    render(<Checklist lang="pt" />);
    expect(screen.getByText("0 de 10 itens")).toBeTruthy();
    fireEvent.click(screen.getByLabelText("Kit de primeiros socorros"));
    expect(screen.getByText("1 de 10 itens")).toBeTruthy();
    expect(screen.getByText("10%")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Recomeçar lista" }));
    expect(screen.getByText("0 de 10 itens")).toBeTruthy();
  });
});
