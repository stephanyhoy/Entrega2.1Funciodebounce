import { debounce } from "./debounce";

// Simulamos el tiempo para las pruebas
jest.useFakeTimers();

describe("debounce function", () => {
  it("should debounce a function", () => {
    const originalFunction = jest.fn();
    const debouncedFunction = debounce(originalFunction, 500);

    // Llamamos a la función debounced varias veces en un corto período
    debouncedFunction();
    debouncedFunction();
    debouncedFunction();
    debouncedFunction();

    // Avanzamos el tiempo en 500 milisegundos
    jest.advanceTimersByTime(500);

    // La función original solo debería haberse llamado una vez después del tiempo de espera
    expect(originalFunction).toHaveBeenCalledTimes(1);
  });

  it("should receive arguments correctly", () => {
    const originalFunction = jest.fn();
    const debouncedFunction = debounce(originalFunction, 500);

    // Llamamos a la función debounced con argumentos
    debouncedFunction(1, "test", { key: "value" });

    // Avanzamos el tiempo en 500 milisegundos
    jest.advanceTimersByTime(500);

    // La función original debería haberse llamado con los mismos argumentos
    expect(originalFunction).toHaveBeenCalledWith(1, "test", { key: "value" });
  });
});
