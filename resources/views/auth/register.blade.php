@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Registro') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="document" 
                                   class="col-md-4 col-form-label text-md-right">
                               {{ __('Documento') }}
                           </label>

                            <div class="col-md-6">
                                <input id="document" 
                                       type="text" 
                                       class="form-control @error('document') is-invalid @enderror" name="document" 
                                       value="{{ old('document') }}" 
                                       required 
                                       autocomplete="document" 
                                       autofocus>

                                @error('document')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="name" 
                                 class="col-md-4 col-form-label text-md-right">
                                 {{ __('Nombre') }}
                            </label>

                            <div class="col-md-6">
                                <input id="name" 
                                       type="text" 
                                       class="form-control @error('name') is-invalid @enderror" 
                                       name="name" 
                                       value="{{ old('name') }}" 
                                       required 
                                       autocomplete="name">

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="last_name" 
                                   class="col-md-4 col-form-label text-md-right">
                                   {{ __('Apellido') }}
                            </label>

                            <div class="col-md-6">
                                <input id="last_name" 
                                       type="text" 
                                       class="form-control @error('last_name') is-invalid @enderror" name="last_name" 
                                       value="{{ old('last_name') }}" 
                                       required 
                                       autocomplete="last_name">

                                @error('last_name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="telephone" 
                                   class="col-md-4 col-form-label text-md-right">
                                {{ __('Telefono') }}
                           </label>

                            <div class="col-md-6">
                                <input id="telephone" 
                                       type="text" class="form-control @error('telephone') is-invalid @enderror" 
                                       name="telephone" 
                                       value="{{ old('telephone') }}" 
                                       required>

                                @error('telephone')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" 
                                   class="col-md-4 col-form-label text-md-right">
                               {{ __('Correo electronico') }}
                            </label>

                            <div class="col-md-6">
                                <input id="email" 
                                       type="email" 
                                       class="form-control @error('email') is-invalid @enderror" 
                                       name="email" 
                                       value="{{ old('email') }}" 
                                       required 
                                       autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">
                               {{ __('Contraseña') }}
                            </label>

                            <div class="col-md-6">
                                <input id="password" 
                                       type="password" 
                                       class="form-control @error('password') is-invalid @enderror" name="password" 
                                       required 
                                       autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" 
                                   class="col-md-4 col-form-label text-md-right">
                                   {{ __('Confirmar Contraseña') }}
                            </label>

                            <div class="col-md-6">
                                <input id="password-confirm" 
                                       type="password" 
                                       class="form-control" 
                                       name="password_confirmation" 
                                       required 
                                       autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-block btn-primary">
                                    {{ __('Registrar') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
