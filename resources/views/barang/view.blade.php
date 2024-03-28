<!-- Menghubungkan dengan view template layout2 -->
@extends('layout2')

@section('konten')
 
<h1>Data Barang</h1>
 
<ul>
	@foreach($barang as $p)
		<li>{{ "Kode Barang : ". $p->kode_barang . ' | Nama Barang : ' . $p->nama_barang  . ' | Harga Barang : ' . $p->harga_barang . ' | Stok Barang : ' . $p->stok_barang}}</li>
	@endforeach
</ul>
 
@endsection