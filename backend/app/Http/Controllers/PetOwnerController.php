<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\Http\Requests\PetOwner as PetOwnerRequest;
use App\Http\Resources\PetOwner as PetOwnerResource;
use App\Http\Resources\PetOwnerCollection;
use App\Http\Resources\PetCollection;
use App\Models\PetOwner;

use Log;

class PetOwnerController extends Controller
{

    /**
     * @var App\Models\PetOwner
     */
    protected $model;

    public function __construct(PetOwner $model)
    {
        $this->model = $model;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $petOwners = new PetOwnerCollection($this->model->paginate());
        return response()->json($petOwners);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\PetOwner   $request
     * @return \Illuminate\Http\Response
     */
    public function store(PetOwnerRequest $request)
    {
        $petOwner = $this->model->fill($request->all());
        $petOwner->password = Hash::make($request->password);
        $petOwner->save();

        return response()->json(new PetOwnerResource($petOwner), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $petOwner = new PetOwnerResource($this->model->findOrFail($id));
        return response()->json($petOwner, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\PetOwner  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PetOwnerRequest $request, $id)
    {
        $petOwner = $this->model->findOrFail($id);
        $petOwner->fill($request->all());
        $petOwner->password = Hash::make($request->password);
        $petOwner->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $petOwner = $this->model->findOrFail($id);
        $petOwner->delete();

        return response()->json(204);
    }

    /**
     * Return pets of owner
     */
    public function pets(Request $request)
    {
        $user = $request->user();
        return response()->json(new PetCollection($user->pets()->paginate()), 200);
    }
}
