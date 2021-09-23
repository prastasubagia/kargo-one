defmodule KargoBeWeb.TruckTypeControllerTest do
  use KargoBeWeb.ConnCase

  alias KargoBe.Unit
  alias KargoBe.Unit.TruckType

  @create_attrs %{
    name: "some name"
  }
  @update_attrs %{
    name: "some updated name"
  }
  @invalid_attrs %{name: nil}

  def fixture(:truck_type) do
    {:ok, truck_type} = Unit.create_truck_type(@create_attrs)
    truck_type
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all truck_types", %{conn: conn} do
      conn = get(conn, Routes.truck_type_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create truck_type" do
    test "renders truck_type when data is valid", %{conn: conn} do
      conn = post(conn, Routes.truck_type_path(conn, :create), truck_type: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.truck_type_path(conn, :show, id))

      assert %{
               "id" => id,
               "name" => "some name"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.truck_type_path(conn, :create), truck_type: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update truck_type" do
    setup [:create_truck_type]

    test "renders truck_type when data is valid", %{conn: conn, truck_type: %TruckType{id: id} = truck_type} do
      conn = put(conn, Routes.truck_type_path(conn, :update, truck_type), truck_type: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.truck_type_path(conn, :show, id))

      assert %{
               "id" => id,
               "name" => "some updated name"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, truck_type: truck_type} do
      conn = put(conn, Routes.truck_type_path(conn, :update, truck_type), truck_type: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete truck_type" do
    setup [:create_truck_type]

    test "deletes chosen truck_type", %{conn: conn, truck_type: truck_type} do
      conn = delete(conn, Routes.truck_type_path(conn, :delete, truck_type))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.truck_type_path(conn, :show, truck_type))
      end
    end
  end

  defp create_truck_type(_) do
    truck_type = fixture(:truck_type)
    %{truck_type: truck_type}
  end
end
