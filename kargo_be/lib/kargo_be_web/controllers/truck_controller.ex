defmodule KargoBeWeb.TruckController do
  use KargoBeWeb, :controller

  alias KargoBe.Unit
  alias KargoBe.Unit.Truck

  action_fallback KargoBeWeb.FallbackController

  def index(conn, _params) do
    trucks = Unit.list_trucks()
    render(conn, "index.json", trucks: trucks)
  end

  def create(conn, %{"truck" => truck_params}) do
    with {:ok, %Truck{} = truck} <- Unit.create_truck(truck_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.truck_path(conn, :show, truck))
      |> render("show.json", truck: truck)
    end
  end

  def show(conn, %{"id" => id}) do
    truck = Unit.get_truck!(id)
    render(conn, "show.json", truck: truck)
  end

  def update(conn, %{"id" => id, "truck" => truck_params}) do
    truck = Unit.get_truck!(id)

    with {:ok, %Truck{} = truck} <- Unit.update_truck(truck, truck_params) do
      render(conn, "show.json", truck: truck)
    end
  end

  def delete(conn, %{"id" => id}) do
    truck = Unit.get_truck!(id)

    with {:ok, %Truck{}} <- Unit.delete_truck(truck) do
      send_resp(conn, :no_content, "")
    end
  end
end
